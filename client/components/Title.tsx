export default function Title({ children }) {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xl font-medium text-gray-900 uppercase"
    >
      {children}
    </th>
  );
}
