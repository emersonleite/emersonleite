setTimeout(() => {
  const links = document.querySelectorAll("link");
  console.log(links);
  const linksArray = [...links];
  console.log(linksArray[5]);
  const head = document.head;

  const scriptEmbed = document.createElement('link');
  scriptEmbed.setAttribute('href', '../css/disqus.css');
  console.log(scriptEmbed);
  console.log(head);
  head.appendChild(scriptEmbed);

  const links2 = document.querySelectorAll("link");
  console.log(links2);

  const container = document.getElementById("disqus_thread");
  //const commentCount = document.querySelector(".comment-count");
  //const community = document.querySelector('.community-name')

  const commentCount = container.querySelector(".comment-count");
  const community = container.querySelector(".community-name");
  console.log(container);
  console.log(commentCount);
  console.log(community);
}, 500);
