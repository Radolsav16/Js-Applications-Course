function loadCommits() {
    // Try it with Fetch API
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    const ul = document.getElementById('commits');
    fetch(url)
        .then(res => res.json())
        .then(data => {
            ul.innerHTML = '';
            data.forEach(entry => {
                const li = document.createElement('li');
                li.textContent = `${entry.commit.author.name}: ${entry.commit.message}`;
                ul.appendChild(li)
            });
            console.log(data)
        })
        .catch(err => `Error: ${err.status} (Not Found)`);
}