import React from "react";

const ListForm = ({
  listA,
  listB,
  handleListAChange,
  handleListBChange,
  handleSubmit,
  result,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="mb-4">
        <label htmlFor="listA">List A:</label>
        <input
          type="text"
          id="listA"
          placeholder="Enter comma separated values"
          value={listA}
          onChange={handleListAChange}
          className="rounded-full px-4 py-2 border"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="listB">List B:</label>
        <input
          type="text"
          id="listB"
          placeholder="Enter comma separated values"
          value={listB}
          onChange={handleListBChange}
          className="rounded-full px-4 py-2 border"
        />
      </div>

      <button
        type="submit"
        className="rounded-full px-4 py-2 bg-blue-500 text-white"
      >
        Compute
      </button>

      {result && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold m-2 text-center">
            Computed Differences:
          </h3>
          <p className="mb-2">
            <span className="font-semibold">Items present only in A:</span>{" "}
            {result.onlyInA.join(", ")}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Items present only in B:</span>{" "}
            {result.onlyInB.join(", ")}
          </p>
          <p className="mb-2">
            <span className="font-semibold">
              Items present in both A and B:
            </span>{" "}
            {result.inBoth.join(", ")}
          </p>
          <p>
            <span className="font-semibold">
              Combined unique items from A and B:
            </span>{" "}
            {result.combinedUnique.join(", ")}
          </p>
        </div>
      )}
    </form>
  );
};

export default ListForm;
