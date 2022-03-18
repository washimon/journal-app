import { NoteAppbar } from '../components/NoteAppbar'

export const NotePage = () => {
  return (
    <>
      <NoteAppbar />
      <div className="note-content">
        <form className="form">
          <div className="form__group">
            <label htmlFor="new-note-title">Algún asombroso título</label>
            <input name="title" id="new-note-title" type="text" />
          </div>
          <div className="form__group">
            <label htmlFor="new-note-what-happened-today">¿Qué pasó hoy?</label>
            <textarea
              name="myDay"
              id="new-note-what-happened-today"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="form__group--image">
            <label htmlFor="new-note-what-happened-today"></label>
            <img
              src="https://images.unsplash.com/photo-1566221422613-abf76be8a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Act For Nature"
            />
          </div>
        </form>
      </div>
    </>
  )
}
