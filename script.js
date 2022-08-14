// import { createStore } from "Redux"

// select dom elements

const containers = document.getElementById('containers')

const list = [
    {
        id: 1,
        count: 0,
    },
]

addCounter.addEventListener('click', () => {
    const listLength = list.length
    list.push({
        id: list.length + 1,
        count: 0,
    })
    console.log(list)
    ran()
})

const ran = () => {
    containers.innerHTML = '';
    list.map((item) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div id="counter${item.id}"class="text-2xl font-semibold text-center">${item.count}</div>
        <div class="flex space-x-3">
            <button onclick="increment(${item.id},)" id="increment${item.id}" class="bg-indigo-400 text-white px-3 py-2 rounded shadow">
                Increment
            </button>
            <button onclick="decrement(${item.id})"  id="decrement${item.id}" class="bg-red-400 text-white px-3 py-2 rounded shadow">
                Decrement
            </button>
        </div>
        `
        containers.appendChild(div);
    })
}

ran();

increment = (id) => {
    list.map((item) => {
        if (item.id === id) {
            item.count = item.count + 5;
        }
    }
    )
    ran()
}

decrement = (id) => {
    list.map((item) => {
        if (item.id === id) {
            item.count = item.count - 5;
        }
    }
    )
    ran()
}

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    list.map((item) => {
        item.count = 0;
    }
    )
    ran()
}
)