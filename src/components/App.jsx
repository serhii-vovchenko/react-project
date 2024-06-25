import { Product } from './Product';
import { BookList } from './BookList';

const favouriteBooks = [
    { id: 'id-1', name: 'JS for beginners' },
    { id: 'id-2', name: 'React basics' },
    { id: 'id-3', name: 'React Router overview' },
];

export default function App() {
    return (
        <div>
            <h1>Best selling</h1>

            <Product name="Tacos With Lime" price={10.99} />
            <Product
                name="Fries and Burger"
                imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
                price={14.29}
            />

            <h1>Books of the week</h1>
            <BookList books={favouriteBooks} />
        </div>
    );
}
