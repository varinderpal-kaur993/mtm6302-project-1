const data = {
    currentUser: 'currentUser',
    ideas: [
      {
        username: 'amyrobson',
        content:
          'Non dolor veniam nostrud ad. Commodo ex officia reprehenderit eu laborum. Qui reprehenderit reprehenderit incididunt eiusmod voluptate cupidatat cupidatat dolor. Incididunt sint cupidatat dolore cupidatat ut do dolor nostrud ullamco aliqua aliqua excepteur. Fugiat nostrud esse voluptate magna nostrud nostrud sint et. Irure excepteur irure ullamco occaecat dolor deserunt. Cillum fugiat sunt ullamco ad enim ea eiusmod do et dolor adipisicing mollit aliqua mollit.\r\n',
        score: 3,
      },
      {
        username: 'maxblagun',
        content:
          'Cupidatat veniam quis aliquip ut pariatur excepteur ut. Cupidatat reprehenderit nulla laborum dolore nulla voluptate cupidatat in. Sint tempor non duis sit deserunt culpa sunt labore eu sit consectetur. Excepteur reprehenderit et officia incididunt consectetur laborum consequat laboris excepteur ea adipisicing qui.\r\n',
        score: 10,
      },
      {
        username: 'maxblagun',
        content:
          'Proident qui elit in deserunt velit eu veniam. Tempor velit cillum et dolore. Incididunt anim Lorem Lorem dolor voluptate deserunt cillum consequat ut. Ea fugiat culpa ex et pariatur dolor est officia ea dolore ullamco mollit. Cillum minim consequat ipsum deserunt velit mollit ad consectetur irure dolore proident qui.\r\n',
        score: 6,
      },
      {
        username: 'maxblagun',
        content:
          'Officia exercitation cupidatat enim sint ea quis reprehenderit ipsum. Commodo ullamco deserunt reprehenderit qui in anim aliqua officia do in reprehenderit Lorem. Ipsum non aute officia est nisi sunt non. Proident in eiusmod sint aliquip qui officia deserunt eiusmod sit. Mollit voluptate anim cillum cupidatat duis est ad excepteur consequat fugiat cillum velit esse. Quis dolore sit ullamco qui.\r\n',
        score: 8,
      },
      {
        username: 'currentUser',
        content:
          'Incididunt ut ut velit dolor irure Lorem ex nostrud et laborum commodo dolore laborum culpa. Adipisicing ullamco eu id sit velit ut laboris irure esse quis. Mollit minim laborum do exercitation sint magna ea ea eu eu laboris aliquip anim culpa. Consectetur eiusmod esse ipsum incididunt duis ea nisi qui duis pariatur.\r\n',
        score: 3,
      },
      {
        username: 'currentUser',
        content:
          'Id aute eu quis tempor laborum duis nostrud proident nostrud culpa est ad. Do dolor cillum ullamco excepteur eiusmod laboris dolore do Lorem. Exercitation eiusmod laborum enim culpa esse.\r\n',
        score: 1,
      },
      {
        username: 'amyrobson',
        content:
          'In magna cupidatat ipsum exercitation incididunt non eu amet occaecat et sint irure consequat. Sunt labore incididunt ut culpa aliquip excepteur est. Enim Lorem dolor adipisicing veniam proident quis ad laborum in commodo qui. Proident elit ullamco aliqua non excepteur in fugiat consequat adipisicing ut eu id sunt laboris.\r\n',
        score: 7,
      },
    ],
  }
  const $ideas = document.getElementById ('container')
  const input = document.getElementById('edit-idea')
  const $form = document.getElementById('popup')
  let editIndex
function makeIdeas(){
  const form = []
  // use for loop to iterate over colors array
  for (let index = 0; index < data.ideas.length; index++) {
    
    // adds HTML string to html array9
    let $html = `<div class="card">
    <div class ="button btn-score" >
    <button type="button" id ="click" class="btn-upvote" aria-label="Close" data-index="${index}">+</button>
    <h5>${data.ideas[index].score}</h5>    
    <button type="button" class="btn-downvote" aria-label="Close" data-index="${index}">-</button></div>
    <div class="card-body">
      <h5 class="card-title">${data.ideas[index].username} ${ (data.ideas[index].username == 'currentUser' )? 'you' : ''}</h5> 
    `
      if (data.ideas[index].username == 'currentUser' ){
      $html +=`<div class  ="btn-container ">
      <button type="button" class="btn-delete" aria-label="Close" data-index="${index}"><i class="fa-solid fa-trash-can"></i>Delete</button>
      <button type="button" class="btn-edit"aria-label="Close" data-index="${index}"><i class="fa-solid fa-pen"></i>Edit</button></div>`}

      $html +=`  <p class="card-text">${data.ideas[index].content}</p></div> </div>`
      
     form.push($html) 
  }
   $ideas.innerHTML = form.join('')
}
 makeIdeas()
const delItem = document.querySelector('.btn-delete');
$ideas.addEventListener('click' , function(e){
 
  if (e.target.classList.contains('btn-delete')) {
  
    const index = e.target.dataset.index
    console.log(index)
    data.ideas.splice(index , 1)
  makeIdeas()
  }
  if (e.target.classList.contains('btn-upvote')) {
  
    const index = e.target.dataset.index
  
    data.ideas[index].score++
  makeIdeas()
  }
  if (e.target.classList.contains('btn-downvote')) {
  
    const index = e.target.dataset.index
    console.log(index)
    data.ideas[index].score--
  makeIdeas()
  }
  if (e.target.classList.contains('btn-edit')) {
 
  $form.classList.add('show')
    const index = e.target.dataset.index
    console.log(index)
   
    input.value = data.ideas[index].content
    editIndex = index

  }
})


const $cancel = document.getElementById('btnC')
$cancel.addEventListener('click', function (e){
  e.preventDefault()
  $form.classList.remove('show')
}
)

const update = document.getElementById('btnU')
update.addEventListener('click', function (e){
  e.preventDefault()
  $form.classList.remove('show')
   data.ideas[editIndex].content = input.value 
   console.log(editIndex)
   makeIdeas()
}
)
const $addtext = document.getElementById('idea')

const add = document.getElementById('add')
add.addEventListener('click', function (e){
  e.preventDefault()
  
  data.ideas.push({
    username: data.currentUser,
    content: $addtext.value,
    score:0
  
  })
  $addtext.value = ""
   makeIdeas()
}
)

