//IMPORTANTE PUNTO Y COMA DETRAS DEL OBJETOS Y SUS ATRIBUTOS


	
	function Matricula (nombre,apellido,telefono,marca,modelo){
		
		this.nombre=nombre;
		this.apellido=apellido;
		this.telefono=telefono;
		this.marca=marca;
		this.modelo=modelo;
			
	}	
	
	
	
function matri(){	
	
	var m = new Matricula("diego","prada","124565351","asus","241-1as");
	
	console.log(m.nombre);
	console.log(m.apellido);
	
}	

