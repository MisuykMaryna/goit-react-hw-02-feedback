import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


export const TransactionHistory = ({ items }) => {
    return (<table className={css.transactionHistory}>
  <thead className={css.head}>
    <tr>
      <th className={css.type}>Type</th>
      <th className={css.amount}>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody className={css.body}>
            {items.map(({ id, type, amount, currency }) => (<tr className={css.bodyItem} key={id}>
      <td className={css.type}>{type}</td>
      <td className={css.amount}>{amount}</td>
      <td>{currency}</td>
    </tr>))}
    
  </tbody>
</table>)
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};