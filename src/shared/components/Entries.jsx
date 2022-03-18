import { Entry } from './Entry'

export const Entries = () => {
  const entries = ['1', '2', '3', '4', '5']
  return (
    <div className="entries">
      {entries.map((entry) => (
        <Entry key={entry} />
      ))}
    </div>
  )
}
