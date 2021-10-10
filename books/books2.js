// create a class for the element

function Book({data}) {
    

// class Book extends HTMLElement{
    // constructor(){
    //     super();
    // }

    // set Book(book){    
    // for references too ${book.title}
        // this.innerHTML =`
    return (
            <div className="card">
            <h5 className="card-header">{data.title}</h5>
            <div className="card-body">
                <h5>${book.subtitle}</h5>
                    {/* <p className="card-text"> */}
                    <table className="table">
                        <tbody>
                        <tr>
                            <td className="text-success font-weight-bold">Title:</td>
                            <td>{data.title}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">Subtitle:</td>
                            <td>{data.subtitle}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">Author:</td>
                            <td>{data.author}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">Publisher:</td>
                            <td>{data.publisher}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">Description:</td>
                            <td>{data.description}</td>
                        </tr>
                        </tbody>
                    </table>
                    </p>
            </div>
            </div>
        );
    // }
}

// customElements.define('mit-book', Book)