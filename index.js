function makeObject(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

let inventory = document.createElement('div')

function makeItem(url, left, bottom){
    let item = makeObject(url, left, bottom)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
}

function makeInventory(){
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}


makeInventory()
makeObject('assets/green-character.gif', 100, 250)
makeObject('assets/tree.png', 200, 450)
makeObject('assets/pillar.png', 350, 250)
makeObject('assets/pine-tree.png', 450, 350)
makeObject('assets/crate.png', 150, 350)
makeObject('assets/well.png', 500, 575)

makeItem('assets/sword.png', 500, 555)
makeItem('assets/shield.png', 165, 335)
makeItem('assets/staff.png', 600, 250)