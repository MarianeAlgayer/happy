// create map
const map = L.map('mapid').setView([-27.5948533,-48.5568021], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// add photo field
function addPhotoField() {
    // select photo container #images
    const container = document.querySelector('#images')

    // select container and duplicate .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // clone the last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // check if the field is empty, if so, don't add to the container
    const input = newFieldContainer.children[0].value

    if(input.value == '') {
        return
    }

    // clear field before adding to the container
    input.value = ''

    // add clone to the container #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        // clear field
        span.parentNode.children[0].value = ''

        return
    }

    // delete field
    span.parentNode.remove()
}

// select yes or no
function toggleSelect(event) {
    // remove class .active (from both buttons)
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))

    // add class .active on the selected button
    const button = event.currentTarget
    button.classList.add('active')

    // update input hidden with the selected value
    const input = document.querySelector('[name="open-on-weekends"]')

    input.value = button.dataset.value
}
