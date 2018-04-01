var app = angular.module('CrudApp', []);

app.controller('CrudController', function($scope){

	$scope.informacaofornecedor = [
		{codigo: '1', razao: 'Jubim LTDA', nome: 'Kibom', endereco: 'Rua 1', cidade: 'Franca', cep: '14403764', 
		estado:'sp', cnpj: '123', ie: '123', telefone: '3406-6772', email:'kibom@hotmail.com'},
		{codigo: '2', razao: 'Jhones LTDA', nome: 'Nike', endereco: 'Rua 2', cidade: 'Franca', cep: '14403763', 
		estado:'sp', cnpj: '321', ie: '321', telefone: '3406-7894', email:'nike@hotmail.com'},
		{codigo: '3', razao: 'Kassim LTDA', nome: 'Adidas', endereco: 'Rua 3', cidade: 'Franca', cep: '14403762', 
		estado:'sp', cnpj: '789', ie: '789', telefone: '3406-6547', email:'adidas@hotmail.com'},
		{codigo: '4', razao: 'Chibrina LTDA', nome: 'Acer', endereco: 'Rua 4', cidade: 'Franca', cep: '14403761', 
		estado:'sp', cnpj: '987', ie: '987', telefone: '3406-1234', email:'acer@hotmail.com'}
	];
	
	$scope.remove = function(codigo){
		var resposta  = confirm("Confirma a exclusão do produto de código " + codigo);
		if (resposta == true){
			var posicao = retornaPosicao(codigo);
			$scope.informacaofornecedor.splice(posicao, 1);
			alert("Remoção com sucesso");	
		}
	}
	$scope.insere = function(){
		// verifica se já existe
		var posicao = retornaPosicao($scope.codigo);
		if (posicao == -1){ // insere novo
			$scope.informacaofornecedor.push(
				{
					codigo: $scope.codigo,
					razao: $scope.razao,
					nome: $scope.nome,
					endereco: $scope.endereco,
					cidade: $scope.cidade,
					cep: $scope.cep,
					estado: $scope.estado,
					cnpj: $scope.cnpj,
					ie: $scope.ie,
					telefone: $scope.telefone,
					email: $scope.email

				}
			);
			alert("Produto inserido com sucesso");
		}
		else {
			// já existe - atualiza a lista
			$scope.informacaofornecedor[posicao].razao = $scope.razao;
			$scope.informacaofornecedor[posicao].nome = $scope.nome;
			$scope.informacaofornecedor[posicao].endereco = $scope.endereco;
			$scope.informacaofornecedor[posicao].cidade = $scope.cidade;
			$scope.informacaofornecedor[posicao].cep = $scope.cep;
			$scope.informacaofornecedor[posicao].estado = $scope.estado;
			$scope.informacaofornecedor[posicao].cnpj = $scope.cnpj;
			$scope.informacaofornecedor[posicao].ie = $scope.ie;
			$scope.informacaofornecedor[posicao].telefone = $scope.telefone;
			$scope.informacaofornecedor[posicao].email = $scope.email;
			alert("Produto atualizado com sucesso");
		}
	}
	
	$scope.atualiza = function(codigo){
		// recupera a posição do produto
		var posicao = retornaPosicao(codigo);
		// passa o produto para o formulário
		$scope.codigo = parseInt($scope.informacaofornecedor[posicao].codigo);
		$scope.razao = $scope.informacaofornecedor[posicao].razao;
		$scope.nome = parseInt($scope.informacaofornecedor[posicao].nome);
		$scope.endereco = parseInt($scope.informacaofornecedor[posicao].endereco);
		$scope.cidade = parseInt($scope.informacaofornecedor[posicao].cidade);
		$scope.cep = parseInt($scope.informacaofornecedor[posicao].cep);
		$scope.estado = parseInt($scope.informacaofornecedor[posicao].estado);
		$scope.cnpj = parseInt($scope.informacaofornecedor[posicao].cnpj);
		$scope.ie = parseInt($scope.informacaofornecedor[posicao].ie);
		$scope.telefone = parseInt($scope.informacaofornecedor[posicao].telefone);
		$scope.email = parseInt($scope.informacaofornecedor[posicao].email);

	}
	
	function retornaPosicao(codigo){
			var i;
			for(i=0; i<$scope.informacaofornecedor.length;i++){
				if ($scope.informacaofornecedor[i].codigo == codigo){
					return i; // retorna posição
				}
			}
			return -1;
	}
	
});