import rows from "./data.json";
function Table() {
  const sorted = rows.sort((a, b) => a.dd - b.dd);

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>DD</th>
        <th>Trades</th>
        <th>Gain</th>
        <th>Prince in $</th>
      </tr>
      <tbody>
        {sorted.map((row) => (
          <tr key={row.name}>
            <td>
              <a href={row.url}>{row.name}</a>
            </td>
            <td>{row.dd}</td>
            <td>{row.trades}</td>
            <td>{row.price}</td>
            <td>{row.gain}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
