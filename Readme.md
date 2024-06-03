#### Desafio 1
[X] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe VbAccount
  
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito

  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[x] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  - Apenas contas com o status true podem fazer empréstimo

[x] Criar um novo tipo de conta a partir da VbAccount
  - Esta conta não deve receber novos atributos
  - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

[x] Todos os atributos de qualquer conta devem ser privados

[x] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[x] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

#### Desafio 2
[x] Crie os componentes referentes aos elementos na página inicial

[x] Crie um componente para o header, com o título da aplicação
[x] Crie um componente para o botão, que aceite onClick como uma das props do componente
[x] Refatore o componente Card para receber o formulário de login. Ao invés de chamar elemento por elemento na página inicial, apenas o componente Card deve ser chamado.
[x] Crie uma função de Boas vindas
[x] Ao clicar no botão, deve aparecer um alert com uma mensagem de boas vindas
[x] Crie o teste unitário da função
