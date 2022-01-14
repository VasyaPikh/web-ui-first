document.querySelector('button').onclick =addPost

function addPost () {
  let textMessage = document.getElementById('fan-message').value
  let currentDate = new Date ()

  if (textMessage.length < 2 || textMessage.trim () === ''){
    alert('Enter more than one character')
  } else if (
     (textMessage.indexOf('>') > -1 && textMessage.indexOf ('<') > -1) ||
      textMessage.indexOf('<') === 0
  ) { 
  alert('Dont use tags "<>"')
  } else {
    document.querySelector('.newappeal').insertAdjacentHTML(
      'beforeend',
      '<div class="text-content text-content-fan "><div></div> <p class="paragraph">' +
      textMessage +
      '</p> <div class="fotter-message flex"><div class="date">' +
      currentDate.toLocaleString ([], {
        dataStyle: 'short'
      }) +
      '</div><div class="username">User</div></div></div>'
    )
  } 
  document.getElementById('fan-message').value = null
}