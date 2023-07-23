const $ = selector => document.querySelector(selector)
const $$ = selectors => document.querySelectorAll(selectors)

const lists = $$('.list')
const items = $$('.list__item')
const imgDelete = $('.img-delete')
const imgMove = $('.img-move')

items.forEach(item => {
  item.ondragstart = e => {
    item.classList.add('dragging')
    e.dataTransfer.setData('id', item.id)
    e.dataTransfer.setDragImage(imgMove, 0, 0)
  }

  item.ondragend = () => {
    item.classList.remove('dragging')
  }
})

lists.forEach(list => {
  list.ondragover = e => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  list.ondrop = e => {
    const idItem = e.dataTransfer.getData('id')
    const item = $(`#${idItem}`)
    list.appendChild(item)
  }
})

imgDelete.ondragover = e => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'move'
}

imgDelete.ondrop = e => {
  const idItem = e.dataTransfer.getData('id')
  const item = $(`#${idItem}`)

  lists.forEach(list => {
    if (list.contains(item)) {
      list.removeChild(item)
    }
  })
}
