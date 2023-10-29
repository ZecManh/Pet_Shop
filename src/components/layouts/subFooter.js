function SubFoot() {
  return (
    <div className="sub-footer" style={{ marginTop: "130px" }}>
      <div className="content-sub-header">
        <p style={{ textAlign: "center" }}>
          Sit amet consectetur adipiscing elit ut aliquam purus sit amet
        </p>
        <h4 className="mt-3 mb-3" style={{ textAlign: "center" }}>
          Newsletter
        </h4>
        <div
          class="input-group input-group-sm mb-3"
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <button
          type="button"
          class="btn btn-warning"
          style={{ display: "block", margin: "0 auto" }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
export default SubFoot;
