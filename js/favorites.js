
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [{
            login: 'viniiirj',
            name: 'Vinicius Soares Ramos',
            public_repos: '76',
            followers: '200000'
           },{
            login: 'maykbrito',
            name: 'Mayk Brito',
            public_repos: '26',
            followers: '12000'
           }]
           
           
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')


        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
        const row = this.createRow()

        row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        row.querySelector('.user img').alt = `Imagem de ${user.name}`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user span').textContent = user.login
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers').textContent = user.followers
        
        this.tbody.append(row)
       })

    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/viniiirj.png" alt="Imagem do vinicius">
            <a href="https://github.com/viniiirj" target="_blank">
            <p>Vinicius Soares Ramos</p>
            <span>viniiirj</span>
            </a>
        </td>
        <td class="repositories">
            76
        </td>
        <td class="followers">
            22006
        </td>
        <td>
            <button class="remove">&times;</button>
        </td>
    `
    return tr
    }

    removeAllTr() {

        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}