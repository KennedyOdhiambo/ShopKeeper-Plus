import { Card } from '../../../components/ui/card';

import SidebarContent from './SidebarContent';

export default function Sidebar() {
   return (
      <Card className="fixed inset-y-0 left-0 z-20 hidden w-60 rounded-none lg:block">
         <SidebarContent />
      </Card>
   );
}
