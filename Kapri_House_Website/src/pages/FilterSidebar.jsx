import "../styles/FilterSidebar.css";

export default function FilterSidebar() {
  return (
    <aside className="filter-sidebar">

      <button className="filter-btn">
        FILTER
      </button>

      {/* CATEGORY */}

      <div className="filter-group">

        <h4>CATEGORY</h4>

        <label>
          <input type="radio" name="category" />
          New Arrivals
          <span>(34)</span>
        </label>

        <label>
          <input type="radio" name="category" />
          Dresses
          <span>(59)</span>
        </label>

        <label>
          <input type="radio" name="category" />
          Kurta & Suit Sets
          <span>(28)</span>
        </label>

        <label>
          <input type="radio" name="category" />
          Solid Dresses
          <span>(21)</span>
        </label>

        <label>
          <input type="radio" name="category" />
          Vacation Dresses
          <span>(25)</span>
        </label>

        <div className="show-more">
          + Show More
        </div>

      </div>

      {/* PRICE */}

      <div className="filter-group">

        <h4>PRICE</h4>

        <input
          className="price-slider"
          type="range"
          min="0"
          max="10000"
        />

        <div className="price-boxes">

          <div>
            <small>FROM</small>

            <input
              type="text"
              placeholder="₹ 0"
            />
          </div>

          <div>
            <small>TO</small>

            <input
              type="text"
              placeholder="₹ 5500"
            />
          </div>

        </div>

      </div>

      {/* COLORS */}

      <div className="filter-group">

        <h4>COLOR</h4>

        <div className="color-grid">

          <span style={{ background: "#1226ff" }}></span>
          <span style={{ background: "#1820a6" }}></span>
          <span style={{ background: "#0b0f82" }}></span>
          <span style={{ background: "#22c8e8" }}></span>
          <span style={{ background: "#b8dce6" }}></span>

          <span style={{ background: "#f6cbd2" }}></span>
          <span style={{ background: "#f3c1cb" }}></span>
          <span style={{ background: "#f26cb6" }}></span>
          <span style={{ background: "#ff5f92" }}></span>
          <span style={{ background: "#f77789" }}></span>

          <span style={{ background: "#ff824d" }}></span>
          <span style={{ background: "#efd19f" }}></span>
          <span style={{ background: "#8615a8" }}></span>
          <span style={{ background: "#ff0000" }}></span>
          <span style={{ background: "#970000" }}></span>

          <span style={{ background: "#ff2975" }}></span>
          <span style={{ background: "#f5a300" }}></span>
          <span style={{ background: "#c96b0d" }}></span>
          <span style={{ background: "#ffe100" }}></span>
          <span style={{ background: "#f0eb00" }}></span>

          <span style={{ background: "#000000" }}></span>
          <span style={{ background: "#ffffff" }}></span>
          <span style={{ background: "#9f9f9f" }}></span>
          <span style={{ background: "#9d1e1e" }}></span>
          <span style={{ background: "#014f2d" }}></span>

          <span style={{ background: "#3dc73d" }}></span>
          <span style={{ background: "#008000" }}></span>
          <span style={{ background: "#e8e4d0" }}></span>
          <span style={{ background: "#c9b2db" }}></span>
          <span style={{ background: "#d8d8ef" }}></span>

          <span style={{ background: "#d7b6ff" }}></span>
          <span style={{ background: "#fff" }}></span>
          <span style={{ background: "#000" }}></span>
          <span style={{ background: "#848400" }}></span>

        </div>

      </div>

      {/* PATTERN */}

      <div className="filter-group">

        <h4>PATTERN</h4>

        <label>
          <input type="radio" name="pattern" />
          A Line
          <span>(2)</span>
        </label>

        <label>
          <input type="radio" name="pattern" />
          Angrakha
          <span>(1)</span>
        </label>

        <label>
          <input type="radio" name="pattern" />
          Straight
          <span>(8)</span>
        </label>

        <label>
          <input type="radio" name="pattern" />
          Gathers
          <span>(4)</span>
        </label>

        <label>
          <input type="radio" name="pattern" />
          Kaftan
          <span>(1)</span>
        </label>

        <div className="show-more">
          + Show More
        </div>

      </div>

      {/* SLEEVE */}

      <div className="filter-group">

        <h4>SLEEVE</h4>

        <label>
          <input type="radio" name="sleeve" />
          3/4 Th Sleeves
          <span>(30)</span>
        </label>

        <label>
          <input type="radio" name="sleeve" />
          Elbow Sleeves
          <span>(13)</span>
        </label>

        <label>
          <input type="radio" name="sleeve" />
          Chudidar Sleeves
          <span>(1)</span>
        </label>

        <label>
          <input type="radio" name="sleeve" />
          Full Sleeves
          <span>(10)</span>
        </label>

        <label>
          <input type="radio" name="sleeve" />
          Sleeveless
          <span>(28)</span>
        </label>

        <div className="show-more">
          + Show More
        </div>

      </div>

      {/* FABRIC */}

      <div className="filter-group">

        <h4>FABRIC</h4>

        <label>
          <input type="radio" name="fabric" />
          60*60
          <span>(2)</span>
        </label>

        <label>
          <input type="radio" name="fabric" />
          Mulmul
          <span>(2)</span>
        </label>

        <label>
          <input type="radio" name="fabric" />
          Cotton Silk
          <span>(4)</span>
        </label>

        <label>
          <input type="radio" name="fabric" />
          Georgette
          <span>(5)</span>
        </label>

        <label>
          <input type="radio" name="fabric" />
          Chiffon
          <span>(3)</span>
        </label>

        <div className="show-more">
          + Show More
        </div>

      </div>

    </aside>
  );
}