
ImageData.fromBase64(function (i) {
    InventoryReader.icon = i;
},"iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANESURBVDhPXZBbTJtlGMe/O426UTeGupVdaKYNHQizHYUVuoEIcxqnMBTSMigQoJxW11KoUQqltHR06xzQQWU4QjjJxkGSgW7ZiVXLlm3MaGJiYjLdHdFbb8zP7/sIk3DxS548/0Oe9xWeUcSxkWcVO3hOEcvziu0y0iztNvvWETIr7GSU29AfbyCt0MzHlloGw24eXD3Lwxvn5FnaSZrkkbxSZh1BeeBdlLoc3kg/xJ1ZL7/dCvIoMiHz0w8T/Bz9hid3B7i7eEr2SF45oz8iIyjTcmXh99tBluZPc+/mKJFrw9xYGOLm4tf8eH2ElTvjrFy/wOrD0FqJmHlaEK8xcG3SzfyIi28ngoxfPMWFgU4GQh2Ez3sYCnuZGgnw/XQP0Xkf0St+4rWGp1cI+sN5ROc66XI3EAw4aG07gd1ZR5fPxsq9MK52K26Pjb4vnQyFWvhz+RxSZqc2i526XIRWZyWjfQ6q68qotJRia6kmcruXf/+e5vGvwxw1FlFcbsLSYMYparcue+jqqOeVlAxe3p+DMDnQwlnfCU46qpid6+bBcj+XZvxElvqYvOQjMec9CitMtLmtBLqbmBn+gqvik2OT0tn2VjbCWKiZ052NlFcbKSvQszsthx2abBYWzrD6eIx/Vqe4H+0n5CmhosbI1NDnLM10/l/QbC+lv9sqnllEc6EaTYaOl/YZ+OuPMZYjfRjFp+kO6WktVlPfWMqVUZf4hFpi96ayLTkTQZt1kLnBFurqj1NckE1DfiJJWbkU1ZQQl6xHqcmUd/WVH+J11/Jo0U/q21m8qE5FkXgAYbtqH+N9TfjbLFTVldBjO4zOkC4Hd2szMbxzkAl/KT6vg4u9dr4bdyFlFHvT1wpiEvYT/6aW6a+aabKZCXitLI52kF1wjOz8AmbDDrytVXjbLURmPCiTNMQkpLJVLJAQtqg0bH09hV3qZM50WPi0sYRe8QqT6Sgf5efRezKPz+xmBoNWlKJH8kqZLSqtjFggDeLitUTi9qhxOc30tBURcLwv09v2CQFPraxtDssFL+xJYZ2YVxNwWE3M9oi/fd4sI83WmmOyttG7zqYCNU9+uUyXUYXrg10Ey1TyfH+6XdY2etdI4T+ljkTj3KYJFwAAAABJRU5ErkJggg==");

function InventoryReader(){
    var me = this;

    this.find = function(img){
        if(!img) img = a1lib.bindfullrs();
        if(!img) return null;

        var icon = a1lib.findsubimg(img, InventoryReader.icon);
        alt1.overLayRect(1687919515, img.x, img.y, 50, 50, 10000, 5);
        
        console.log(icon);
    }
}