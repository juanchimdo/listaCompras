(function(){
	document.addEventListener("DOMContentLoaded", function() {

		//     VARIABLES

		const lista = document.querySelector('ol')
		const button = document.querySelector('button')
		const botonesEliminar = document.querySelector ('botonesEliminar')
		const input = document.querySelector ('input')
		const limpiar = document.getElementById('limpiar')
		let listaArticulos = []	
		let item

		//     FUNCIONES

		function guardar () {
			item = input.value
			if (item === '') {
				input.style.background = 'red'
				input.value= ''
				input.focus ()
			} else {
				input.style.background = ''
				const articulo = document.createElement ('li')
				articulo.append (item)
				const borrar =document.createElement ('button')
				borrar.classList.add ('borrar')
				borrar.append ('X')
				articulo.append (borrar)
				lista.insertBefore (articulo, lista.firstChild)
				input.value=''
				input.focus()
				listaArticulos.push (item)
				borrar.addEventListener ('click', function () {
					lista.removeChild (articulo)
					listaArticulos.splice (listaArticulos.indexOf (item,1))
					input.focus ()
				})
			}
		}
		function validar (){
			item = input.value
			if (!listaArticulos.includes(item)) {
				guardar ()
			} else {
				input.style.background = 'red'
				input.select ()
				alert ('Articulo ya ingresado')
			}
		}
		function limpiarTodo () {
			while (lista.firstChild) {
				lista.removeChild (lista.firstChild)
			}
			listaArticulos = []
			input.value = ''
			input.focus ()
			input.style.background = ''
		}

		//   	SCRIPT

		input.focus ()
		button.addEventListener ('click',validar)
		input.addEventListener ('click', function() {
			input.select ()
		})
		input.addEventListener('keypress', function (e) {
    		if (e.key === 'Enter') {
      			return validar ()
      		}
		});	
		limpiar.addEventListener ('click', limpiarTodo)
	})
}())


