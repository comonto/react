export default function Log({ logs }) {
    return (
        <ol id="logId">
          {logs ? logs.map((log) => (
            <li key={`${log.id}`}>
              {log.id}
            </li>
          )): ''}
        </ol>

    );
}
