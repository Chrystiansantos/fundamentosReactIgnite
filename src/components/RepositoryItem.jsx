export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'batata'}</strong>
      <p>{props.repository?.description ?? 'macarrao'}</p>
      <a href={props.repository?.link}>{props.repository?.link ?? 'abacaxi'}</a>
    </li>
  );
}
