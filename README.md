# sugarboxinterviewproject


# create user API
  URL-http://localhost:8000/createuser
  Body- {
	"email":"muthu@gmail.com",
	"password":"12345678"
}
header - {Authorization:Basic QXp1cmVEaWFtb25kOmh1bnRlcjI=}

# Delete Existing User
  URL - http://localhost:8000/deleteuser/607182a1eebe9c4fd7014294
  Header - {Authorization:Basic QXp1cmVEaWFtb25kOmh1bnRlcjI=}
  
  
  DB JSON :
  
  {
    "_id" : ObjectId("607182bceebe9c4fd7014295"),
    "email" : "muthu@gmail.com",
    "password" : "12345678",
    "__v" : 0
}
