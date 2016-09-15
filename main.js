let $newName, $newTodoForm, $newNumber, $newAddress, $newEmail, $todoList;

$(document).ready(init);

console.log("Hi!")
function init() {

  $newName = $('#newName');
  $newNumber = $('#newNumber');
  $newAddress = $('#newAddress');
  $newEmail = $('#newEmail')
  $newTodoForm = $('#newTodoForm');
  $todoList = $('#todoList')

  $newTodoForm.submit(createTodo);
  $todoList.on('click', '.delete', removeTodo);

}


function removeTodo(event) {
  console.log('delete!!');
  console.log('event.target: ', event.target)

  let $target = $(event.target);
  $target.closest('tr').remove();
}

function createTodo(event) {
  event.preventDefault(); // prevent the form submitting

  let name = $newName.val();
  let number = $newNumber.val();
  let address = $newAddress.val();
  let email = $newEmail.val();

  $newName.val('');
  $newNumber.val('');
  $newAddress.val('');
  $newEmail.val('');


  let $row = createNewRow(name, number, address, email);

  $todoList.append($row);

}

function createNewRow(name, number, address, email){

  let $row = $('#templateRow').clone();

  $row.children('.name').text(name);
  $row.children('.number').text(number);
  $row.children('.address').text(address);
  $row.children('.email').text(email);

  $row.removeAttr('id');


  return $row;

}





