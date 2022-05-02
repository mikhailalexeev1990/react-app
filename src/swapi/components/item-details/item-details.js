import React, {Component} from "react";
import './item-details.css';
import Spinner from "../spinner";
import ThrowError from "../throw-error";

export const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}:</span>
            <span>{item[field]}</span>
        </li>
    );
}

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
        loading: false,
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId) {
            this.setState({loading: true});
            this.updateItem()
        }
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId).then((item) => {
            this.setState({
                item,
                image: getImageUrl(item),
                loading: false,
            });
        });
    }

    render() {
        const {item, image, loading} = this.state;

        if (!item) {
            return <span>Select a item from the list</span>;
        }

        if (loading) {
            return <Spinner/>;
        }

        const {name} = item;

        return (
            <div className="item-details card">
                <img className="item-image"
                     src={image}/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                const type = (<Record />).type;

                                if (child.type === type) {
                                    return React.cloneElement(child, {item});
                                }
                            })
                        }
                    </ul>
                    <ThrowError/>
                </div>
            </div>
        )
    }
}
