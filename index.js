let item = document.getElementById("item")
let p = document.getElementById("price")
let qty = document.getElementById("qty")
let table = document.getElementById("table")
// let index

qty.value = 1
let arr = []


function item_() {
    if (item.value == "bag") {
        p.value = `${300}`
    } else
        if (item.value == "shoes") {
            p.value = `${750}`
        } else
            if (item.value == "clothes") {
                p.value = `${200}`
            } else
                if (item.value == "wristwatch") {
                    p.value = `${1500}`
                } else
                    if (item.value == "belts") {
                        p.value = `${450}`
                    } else
                        if (item.value == "nil") {
                            p.value = ''
                        }
}

function plus() {
    qty.value = `${Number(qty.value) + 1}`
}
function minus() {
    let stat = qty.value
    qty.value = `${Number(qty.value) - 1}`
    if (stat == 1) {
        qty.value = 1
    }
}
function add() {
    if (item.value == "nil") {
        alert("Sorry, add a product")
    } else {
        arr.push({ Product: item.value, Qty: qty.value, UnitPrice: p.value, Total: qty.value * Number(p.value) })
    }
    populate()

}

function populate() {
    del()
    create_()
}

function del() {
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild)
    }
}


function create_() {

    let row_ = table.insertRow(-1)
    row_.style = "padding: 15px;"
    let col_1 = row_.insertCell(0)
    let col_2 = row_.insertCell(0)
    let col_3 = row_.insertCell(0)
    let col_4 = row_.insertCell(0)
    let col_5 = row_.insertCell(0)
    let col_6 = row_.insertCell(-1)

    col_5.innerHTML = "s/n"
    col_4.innerHTML = "Item"
    col_3.innerHTML = "Qty"
    col_2.innerHTML = "Price/unit"
    col_1.innerHTML = "Total"
    col_6.innerHTML = "Action"

    for (index = 0; index < arr.length; index++) {
        let row_ = table.insertRow(-1)
        row_.style = "padding: 15px;"
        let col_1 = row_.insertCell(0)
        let col_2 = row_.insertCell(0)
        let col_3 = row_.insertCell(0)
        let col_4 = row_.insertCell(0)
        let col_5 = row_.insertCell(0)
        let col_6 = row_.insertCell(-1)

        col_6.innerHTML =
            `<select>
            <option value = "nil">Choose</option>
            <option value = "edit">Edit</option>
            <option value = "delete">Delete</option>
    </select>`
        col_6.addEventListener("change", function () {
            action(index -1)
        })
    //     col_6.innerHTML =
    //         `<select>
    //         <option value = "nil">Choose</option>
    //         <option value = "edit">Edit</option>
    //         <option value = "delete">Delete</option>
    // </select>`
    //     col_6.addEventListener("change", function () {
    //         action(index -1)
    //     })
        console.log(index);
        col_5.innerHTML = index + 1
        col_4.innerHTML = arr[index].Product
        col_3.innerHTML = arr[index].Qty
        col_2.innerHTML = arr[index].UnitPrice
        col_1.innerHTML = Number(arr[index].UnitPrice) * Number(arr[index].Qty)
    }
    item.value = 'nil'
    qty.value = 1
    p.value = ''
}

function action(inde) {
    let opt = document.getElementById("opt")
    // if (opt.value == "delete") {
        arr.splice(inde, 1)
        alert(inde)
    // }
    del()
    create_()
}