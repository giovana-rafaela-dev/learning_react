import Item from './Item';

function List(){
    return(
        <>
          <h1>Minha Lista</h1>
          <ul>    
            <li>item 1 </li>
            <li>item 2 </li>
            <li>item 3 </li>
            <Item marca = 'Ferrari' ano_lancamento={1985} />
            <Item marca = 'Lamborghini' ano_lancamento={1965} />
            <Item />
          </ul>
        </>
    )
}

export default List