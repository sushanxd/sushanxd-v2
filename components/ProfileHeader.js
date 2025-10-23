export default function ProfileHeader() {
  return (
    <div className="flex items-center space-x-4">
      <img src="/img/profile.jpg" className="w-16 h-16 rounded-full" alt="Profile" />
      <div>
        <h1 className="text-xl font-bold">Sushan</h1>
        <p className="text-sm text-gray-500">Designer • Photographer • Filmmaker</p>
      </div>
    </div>
  );
}
