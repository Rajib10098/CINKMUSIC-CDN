let smWiewAllBtnA = document.getElementById("sm-wiewAll-btn-a");
     
        window.addEventListener("load", function () {
            let smLabel = "NEFFEX"

            smWiewAllBtnA.href = `https://cinkmusic.blogspot.com/search?q=${encodeURIComponent(smLabel)}`


            fetch(`https://www.googleapis.com/blogger/v3/blogs/6002919485693520244/posts/search?q=${encodeURIComponent(smLabel)}&key=AIzaSyDM7PgWDnsmjmusZ1K7sfoeBQCcOSHkLmA`).then((response) => response.json()).then((data) => {

                let displaySeeMore = "";
                for (let i = 0; i < data.items.length; i++) {
                    let findImage = data.items[i].content
                    let resizingTheImage = new URL(findImage.match(/\bhttps?:\/\/blogger.googleusercontent.com\/\S+/gi)).href.replace("s1600", "s150")



                    displaySeeMore += `

      <div class="SeeMoreContainer">
        
        <a style="text-decoration: none;" href="${data.items[i].url}">
            <div class="SeeMoreImageContainer"><p class="smLoading">Loading...</p>
            <img class="SeeMoreImage" src="${resizingTheImage}" alt="" loading="lazy">
        </div>
        </a>

        <div class="SeeMoretitleContainer">
            <a style="text-decoration: none;" href="${data.items[i].url}"><p class="SeeMoreSongTitle">${data.items[i].title}</p></a>
        </div>

      </div>
      `





                    document.getElementById("See-more-container").innerHTML = displaySeeMore;

                }




            })


        })

