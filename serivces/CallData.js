function CallData(){
    //GET
    this.getItems = function(){
        return axios({
            url: 'https://60db2a6c801dcb0017290f1e.mockapi.io/clothes',
            method: "GET",
        })
    }
}