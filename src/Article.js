import React from "react";
import api from './Api';
import "./styles.css"

class Article extends React.Component {

    state = {
        livros: [],
    }

    async componentDidMount() {
        const response = await api.get('');
        console.log(response.data);
        console.log(response.data.data);
        this.setState({ livros: response.data.data });

    }

    render() {
        const { livros } = this.state;

        return (
            <div className="corpo">
                {livros.map(livro => (
                    <div className="livro" key={livro[0]?.[0].id} >
                        <Card image={livro.image} title={livro.title} author={livro.author} description={livro.description} genre={livro.genre} published={livro.published} />
                    </div>
                ))}

            </div>
        )
    }

}

function Card(props) {

    return (
        <div className="card">
            <div className="card__body">
                <img className="card__img" src={props.image} />
                <h3 className="card__title">{props.title}</h3>
                <h5 className="card__author">{props.author}</h5>-
                <p className="card__description">{props.description}</p>
                <div className="final">
                    <button type="button" class="btn btn-primary">{props.genre}</button>
                    <h6 className="card__data">{props.published}</h6>
                </div>

            </div>

        </div>
    );
}

export default Article;