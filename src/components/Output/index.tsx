const Output = () => (
  <section className="my-5">
    <ul className="list-group gap-4">
      <li className="list-group-item py-3 rounded-3">
        <div className="row gap-3 container">
          <span className="col-6 my-auto">Orignial link content</span>
          <span className="col-4 my-auto">Shortened link</span>
          <button className="btn btn-success col my-auto">Copy</button>
        </div>
      </li>
    </ul>
  </section>
);

export default Output;
