import { Component, ViewChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angula_3.0';
  ValorDei:number = 0
  list: Array<string>=[]
  // dadoLocalStorage:string [] | null=[]
  
  
  @ViewChild('InputText')
  input!:ElementRef



 Somar_um(event:any):number{
  this.ValorDei ++ 
  
 return this.ValorDei
 }

 ngafterViewInit(){
   this.input.nativeElement
  }
  
  add(valor:string):void{
   this.list.push(valor)
   this.input.nativeElement.value=''

 }
 alertar($event:any){
   alert('Seu item será removido, clique no OK para confirmar a deleção')
 }

 Remove(valor:any):void{
  this.list.length=0
  this.ValorDei=0
  
 }
 Deletar(index:number):number{
   if(index <-1){
    this.list.splice(index, 1)
   }
   this.ValorDei --

   return this.ValorDei
   
  }

  SalvarLS(valor:string):void{
    let arrStr = JSON.stringify(this.list)
    localStorage.setItem('Tarefa',arrStr)
    this.RecuperarLS()

  }
  RecuperarLS():void{
    let storage = localStorage.getItem('Tarefa')
    let arr = JSON.parse(storage || '[]')
    this.list = arr
  }
   ngOnInit():void{
    this.RecuperarLS()
  }
   DeletarLSt(index:number):void {
    this.list?.splice(index, 1)
    let arrStr = JSON.stringify(this.list)
    localStorage.setItem('Tarefa',arrStr)
    this.RecuperarLS()
   }
   DeletarLST(index:number):void {
    this.list?.splice(index)
    let arrStr = JSON.stringify(this.list)
    localStorage.setItem('Tarefa',arrStr)
    this.RecuperarLS()
   }


//   SalvarNoLocalStorage(valor:string):void{//vai receber o valor que eu recebi no metodo e vou guardar dentro do localstorage
//    this.dadoLocalStorage?.push(valor)//pegar o valor que eu recebi e dando um push no meu array, guardando o novo valor
//    let arrStr = JSON.stringify(this.dadoLocalStorage)//vai transofrmar o que esta aqui dentro, em uma string
//    localStorage.setItem('dado',arrStr)//fazemos isso pq o localstorage só aceita strings
//   this.RecuperarLocalStorage()
//    //   localStorage.setItem('dado', valor)
//   // this.dadoLocalStorage =valor //vou atribuir o valor que foi adicionado na propriedade dentro da variavel dadoLocalStorage
//   }
//   RecuperarLocalStorage():void{
//   // this.dadoLocalStorage = localStorage.getItem('dado')
//   let storage = localStorage.getItem('dado')
//   let arr = JSON.parse(storage || '[]')//transforma a string em array ou objeto, é dentro dela que eu recuperei os dados do localstorage
//   this.dadoLocalStorage = arr


//  // ngOnInit():void{//quando so arquivos do html dele forem totalmente carregados na tela, ele vai executar o meu ngoninit e vai executar os dados do localstorage
//     //this.RecuperarLocalStorage()
//   }

//   deletarDoLocalStorage(index:number):void {//string, numero 
//   this.dadoLocalStorage?.splice(index, 1)//quantos elementos ele quer apagar , se passar o index, ele vai apagar um elemento daquele index
//   let arrStr = JSON.stringify(this.dadoLocalStorage)
//   localStorage.setItem('dado',arrStr)
//   this.RecuperarLocalStorage()//tem que atualizar o localstorage depois que deleta
// }


//}vou criar um metodo para recuperar o que eu criei lá no localSotage
//e vou guardar na variavel dadolocalstorage

   }
