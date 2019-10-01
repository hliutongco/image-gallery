class Paginate {
  constructor(data){
    this.allCards = this.paginateCards(data)
    this.currentPage = 1
  }

  paginateCards(data){
    const arrayOfCardArrays = []
    for(let i=0; i < data.length; i+=10){
      arrayOfCardArrays.push(data.slice(i, i+10))
    }
    return arrayOfCardArrays
  }

  changeCurrentPage(pageNum){
    this.currentPage = pageNum
  }

  returnCardArray(){
    if(typeof this.currentPage === "number"){

      return this.allCards[this.currentPage - 1]
    }
    else {
      console.log("error");
    }

  }
}
