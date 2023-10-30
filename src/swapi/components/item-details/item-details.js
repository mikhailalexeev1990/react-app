import React, {Component} from "react";
import './item-details.css';
import Spinner from "../spinner";
import ThrowError from "../throw-error";
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";

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
        error: false,
    }

    componentDidMount() {
        this.update();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId) {
            this.setState({loading: true});
            this.update()
        }
    }

    update() {
        const {itemId, getData, getImageUrl} = this.props;

        if (!itemId) {
            return;
        }

        this.setState({
            loading: true,
            error: false,
        });

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false,
                });
            })
            .catch(() => {
                this.setState({
                    error: true,
                    loading: false,
                });
            });
    }

    render() {
        const {item, image, loading, error} = this.state;

        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>
        }

        if (!item) {
            return <span>Select a item from the list</span>;
        }

        const {name} = item;

        return (
            <ErrorBoundary>
                <div className="item-details card">
                    <img className="item-image" alt={''} src={image}/>
                    <div className="card-body">
                        <h4>{name}</h4>
                        <ul className="list-group list-group-flush">
                            {
                                React.Children.map(this.props.children, (child) => {
                                    const type = (<Record/>).type;

                                    if (child.type === type) {
                                        return React.cloneElement(child, {item});
                                    }
                                })
                            }
                        </ul>
                        <ThrowError/>
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}
