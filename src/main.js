



const removeTabBtn = () => {
    
    const getTabClass = document.querySelectorAll (".tabclickBtn")
    getTabClass.forEach(removeColor => {
        removeColor.classList.remove ("bg-sky-500", "text-white")
    });
}
 const all_con = document.getElementById ('card-container')
 const open_con = document.getElementById ('open-container')
 const close_con = document.getElementById ('close-container')
 const all_issu = document.getElementById ('all-issu')
 const open_issu = document.getElementById ('open-issu')
 const close_issu = document.getElementById ('close-issu')

const clickBtnFn = (id) => {
    removeTabBtn ()
    const tabBtn = document.getElementById (`tBtn${id}`)
    tabBtn.classList.add ('bg-sky-500', 'text-white')
    
    const arr = [all_con,open_con,close_con,all_issu,open_issu, close_issu]
    for (const item of arr) {

          item.classList.add ('hidden')
    }
   

    if (id == 1) {

          all_con.classList.remove ("hidden")
          all_issu.classList.remove ("hidden")
    }

    else if (id == 2) {

        open_con.classList.remove ('hidden')
        open_issu.classList.remove ('hidden')
    }
    else if (id == 3) {

           close_con.classList.remove ('hidden')
           close_issu.classList.remove ('hidden')
    }
    
}

// const str = "sll".toUpperCase ()









const tabBtn = [{id: 1 ,name:"All"},{id: 2 ,name:"Open"},{id: 3 ,name:"close"}]
const tabContainer = document.getElementById ('tab-container')
tabContainer.innerHTML = ""

tabBtn.forEach((singleBtn, index) => {
    const {name} = singleBtn
    tabContainer.innerHTML += `<button id="tBtn${index + 1}" onclick ="clickBtnFn ('${index+1}')" class=" ${name=== "All"&& "bg-sky-500 text-white"} border tabclickBtn border-gray-100 px-7 py-1 rounded-md">${name}</button>`
});



// [{
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// },]
  
  const dataLoadFn = async () => {
    const url ="https://phi-lab-server.vercel.app/api/v1/lab/issues/"
    const res = await fetch (url)
    const data = await res.json ()
    const arrayData = data.data
    displayAllTabFn (arrayData)
    statusFn ()
    statusFn2 ()
    statusFn3 ()
}

dataLoadFn ()
const cardContainer = document.getElementById ('card-container')
cardContainer.innerHTML = ''
const displayAllTabFn = (data) => {
    
    data.forEach((singleData) => {
        cardContainer.innerHTML += 
        `
            <div onclick="loadWordDetailsFn (${singleData.id})" id="all" class="shadow-md rounded-md border-t-3 ${singleData.status === "open" ? "border-green-600" : "border-purple-600"} p-5 space-y-5 ">
                <div class="flex justify-between">
                        <p class=" p-2 rounded-full ${singleData.status === "open"? " text-green-600": " text-purple-700"} p-1 rounded-full">${singleData.status === "open"?`<i class="fa-solid fa-certificate"></i>`: `<span ><i class="fa-regular fa-square-check"></i></span>`}</p>
                        <div><button   class=" px-4 ${singleData.priority ==="high"? "bg-red-300 text-red-600": "" || singleData.priority ==="medium"? "bg-yellow-200 text-yellow-400": "" || singleData.priority === "low" ? "bg-gray-300 text-gray-500" : "bg-white" } py-1 rounded-full">${singleData.priority}</button></div>
                        
                </div>
                <div class="border-b border-gray-200 px-2 space-y-5">
                    <h4>${singleData.title}</h4>
                    <p>${singleData.description}</p>
                    <div class="flex gap-1 mb-2">
                        <button class=" border py-1 px-1 rounded-full   ${singleData.labels[0] === "bug"? "bg-red-100 text-red-400" : "" } ${singleData.labels[0] === "enhancement"? "bg-green-100 text-green-400" : "" }  ${singleData.labels[0] === "documentation"? "bg-green-100 text-yellow-400" : "" }  "> ${singleData.labels[0]?.toUpperCase ()?? ""}</button>
                        <button class=" border py-1 px-1 rounded-full   ${singleData.labels[1] === "help wanted"? "bg-yellow-100 text-yellow-400" : "bg-white border-none" } ${singleData.labels[1] === "good first issue"? "bg-yellow-100 text-yellow-400" : "bg-white border-none" } text-red-500 bg-red-100 "> ${singleData.labels[1]?.toUpperCase ()?? ""}</button>
                    </div>
                </div>
                <div class="text-gray-700 space-y-2">
                        <p>#${singleData.id} ${singleData.author}</p>
                        <p>${singleData.createdAt}</p>
                </div>
                </div>
                `
       });
    
       const openArr = data.filter ((data) => {
             
            return data.status ==="open"
       })

        displayOpen (openArr)


          const closeArr = data.filter ((data) => {
             
            return data.status ==="closed"
       })

        displayClosed (closeArr)
    }







const openContainer = document.getElementById ('open-container')
 openContainer.innerHTML = ""

function displayOpen (data) {

     
        data.forEach((singleData) => {
        openContainer.innerHTML += 
        `
            <div class="shadow-md onclick="loadWordDetailsFn (${singleData.id})" rounded-md  border-t-3 ${singleData.status === "open" ? "border-green-600" : "border-purple-600"} p-5 space-y-5 ">
                <div class="flex justify-between">
                        <p class=" p-2 rounded-full ${singleData.status === "open"? " text-green-600": " text-purple-700"} p-1 rounded-full">${singleData.status === "open"?`<i class="fa-solid fa-certificate"></i>`: `<span ><i class="fa-regular fa-square-check"></i></span>`}</p>
                        <div><button  class=" px-4 ${singleData.priority ==="high"? "bg-red-300 text-red-600": "" || singleData.priority ==="medium"? "bg-yellow-200 text-yellow-400": "" || singleData.priority === "low" ? "bg-gray-300 text-gray-500" : "bg-white" } py-1 rounded-full">${singleData.priority}</button></div>
                </div>
                <div class="border-b border-gray-200 px-2 space-y-5">
                    <h4>${singleData.title}</h4>
                    <p>${singleData.description}</p>
                    <div class="flex gap-1 mb-2">
                        <button class="p-2 border rounded-full ${singleData.labels[0] === "bug"? "bg-red-100 text-red-400" : "" } ${singleData.labels[0] === "enhancement"? "bg-green-100 text-green-400" : "" }  ${singleData.labels[0] === "documentation"? "bg-green-100 text-yellow-400" : "" }  px-3 py-1"> ${singleData.labels[0]?.toUpperCase ()?? ""}</button>
                        <button class="p-2 border rounded-full  ${singleData.labels[1] === "help wanted"? "bg-yellow-100 text-yellow-400" : "bg-white border-none" } ${singleData.labels[1] === "good first issue"? "bg-yellow-100 text-yellow-400" : "bg-white border-none" } text-red-500 bg-red-100 px-3 py-1"> ${singleData.labels[1]?.toUpperCase ()?? ""}</button>
                    </div>
                </div>
                <div class="text-gray-700 space-y-2">
                        <p>#${singleData.id} ${singleData.author}</p>
                        <p>${singleData.createdAt}</p>
                </div>
                </div>
                `
       });
}









const closeContainer = document.getElementById ('close-container')
closeContainer.innerHTML = ""
function displayClosed (data) {

     
        data.forEach((singleData) => {
        closeContainer.innerHTML += 
        `
            <div  onclick="loadWordDetailsFn (${singleData.id})" class="shadow-md rounded-md  border-t-3 ${singleData.status === "open" ? "border-green-600" : "border-purple-600"} p-5 space-y-5 ">
                <div class="flex justify-between">
                        <p class=" p-2 rounded-full ${singleData.status === "open"? " text-green-600": " text-purple-700"} p-1 rounded-full">${singleData.status === "open"?`<i class="fa-solid fa-certificate"></i>`: `<span ><i class="fa-regular fa-square-check"></i></span>`}</p>
                        <div><button onclick="loadWordDetailsFn (${singleData.id})" class=" px-4 ${singleData.priority ==="high"? "bg-red-300 text-red-600": "" || singleData.priority ==="medium"? "bg-yellow-200 text-yellow-400": "" || singleData.priority === "low" ? "bg-gray-300 text-gray-500" : "bg-white" } py-1 rounded-full">${singleData.priority}</button></div>
                </div>
                <div class="border-b border-gray-200 px-2 space-y-5">
                    <h4>${singleData.title}</h4>
                    <p>${singleData.description}</p>
                    <div class="flex gap-1 mb-2">
                        <button class="p-2 border rounded-full ${singleData.labels[0] === "bug"? "bg-red-100 text-red-400" : "" } ${singleData.labels[0] === "enhancement"? "bg-green-100 text-green-400" : "" }  ${singleData.labels[0] === "documentation"? "bg-green-100 text-yellow-400" : "" }  px-3 py-1"> ${singleData.labels[0]?.toUpperCase ()?? ""}</button>
                        <button class="p-2 border rounded-full  ${singleData.labels[1] === "help wanted"? "bg-yellow-100 text-yellow-400" : "bg-white border-none" } ${singleData.labels[1] === "good first issue"? "bg-yellow-100 text-yellow-400" : "bg-white border-none" } text-red-500 bg-red-100 px-3 py-1"> ${singleData.labels[1]?.toUpperCase ()?? ""}</button>
                    </div>
                </div>
                <div class="text-gray-700 space-y-2">
                        <p>#${singleData.id} ${singleData.author}</p>
                        <p>${singleData.createdAt}</p>
                </div>
                </div>
                `
       });
}




const statusFn = () => {
   const issu = document.getElementById('all-issu')
   issu.innerText = cardContainer.children.length
   
}


const statusFn2 = () => {
   const issu = document.getElementById('open-issu')
   issu.innerText = openContainer.children.length
   
}


const statusFn3 = () => {
   const issu = document.getElementById('close-issu')
 
   issu.innerText = closeContainer.children.length
}



const modal = document.getElementById('modal')

async function loadWordDetailsFn(id) {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`

    const res = await fetch(url)
    const data = await res.json()
    const details = data.data
    
    displayModalfn(details)
}

function displayModalfn(objectData) {
    modal.innerHTML = `
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
            <div class="space-y-5 bg-white shadow-md p-10 rounded-md w-[700px]">
                <h4 class="text-2xl font-semibold">${objectData.title}</h4>
                <div class="flex gap-2">
                    <button class="px-3 ${objectData.status === "open"? "bg-green-500 text-white": "bg-red-600 text-white"}rounded-full">${objectData.status === "open"? "Open" : "Closed"}</button>
                    <p>. ${objectData.author}<span>. ${objectData.createdAt}</span></p>
                </div>
                <div class="flex gap-2">
                    <button class=' px-3 py-1 rounded-lg ${objectData.labels[0]=== "bug"? "bg-red-100 text-red-600": "bg-green-400 text-white"}'> ${objectData.labels[0]}</button>
                    <button class="px-3 py-1 rounded-lg ${objectData?.labels?.[1] === "bug" ? "bg-yellow-100 text-yellow-600" : "bg-sky-400 text-white" } ${objectData?.labels?.[1] === undefined ? "bg-white" : "" }"}'>${objectData?.labels?.[1] || ""}</button>
                </div>
                <div class="text-gray-500 mb-3">
                    <p>${objectData.description}</p>
                </div>

                <div class="flex gap-x-40">
                    <div class="py-1">
                        <p class="text-gray-500">Assignee :${objectData.assignee}</p>
                        <p class="font-bold text-[20px]">${objectData.author}</p>
                    </div>
                        <div>
                        <p class="text-gray-500">Priority</p>
                        <button class="text-white bg-red-700 p-2 rounded-full">${objectData.priority}</button>
                    </div>
                </div>
                <div class="modal-action">
                    <form method="dialog">
                        <button class="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    `

    document.getElementById('my_modal_5').showModal()
}



const searchIssue = (text) => {
    
const searchText = text.trim().toLowerCase()
const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`

fetch(url)
.then(res => res.json())
.then(data => {

cardContainer.innerHTML = ""
        if(data.data.length === 0){
            cardContainer.innerHTML = "<p class=' flex justify-center items-center col-span-4  text-gray-500 text-3xl mt-5'>😊No issue found</p>"
            return
        }
displayAllTabFn(data.data)


})

}



document.getElementById("search-btn").addEventListener("click", () => {

const text = document.getElementById("search-input").value
const value = text.trim ().toLowerCase ()

  searchIssue (value)
})