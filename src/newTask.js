import React from 'react';

export default() => {
    return (
        <div>
          <h2>New task</h2>
          <form>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" id="description"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    );
}