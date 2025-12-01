import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

interface Mission {
  id: string;
  title: string;
  description: string | null;
  status: string;
  points: number;
  created_at: string;
  updated_at: string;
}

const Missions = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingMission, setEditingMission] = useState<Mission | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "active",
    points: 0,
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchMissions();
  }, []);

  const fetchMissions = async () => {
    const { data, error } = await supabase
      .from("missions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch missions",
        variant: "destructive",
      });
    } else {
      setMissions(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingMission) {
      const { error } = await supabase
        .from("missions")
        .update(formData)
        .eq("id", editingMission.id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update mission",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Mission updated successfully",
        });
        fetchMissions();
        resetForm();
      }
    } else {
      const { error } = await supabase.from("missions").insert([formData]);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to create mission",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Mission created successfully",
        });
        fetchMissions();
        resetForm();
      }
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("missions").delete().eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete mission",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Mission deleted successfully",
      });
      fetchMissions();
    }
  };

  const handleEdit = (mission: Mission) => {
    setEditingMission(mission);
    setFormData({
      title: mission.title,
      description: mission.description || "",
      status: mission.status,
      points: mission.points,
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      status: "active",
      points: 0,
    });
    setEditingMission(null);
    setIsDialogOpen(false);
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary/20 text-primary";
      case "completed":
        return "bg-green-500/20 text-green-400";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Missions</h1>
            <p className="text-muted-foreground">
              Manage all gaming missions and challenges
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90" onClick={() => resetForm()}>
                <Plus className="h-4 w-4 mr-2" />
                Add Mission
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card">
              <DialogHeader>
                <DialogTitle>
                  {editingMission ? "Edit Mission" : "Create New Mission"}
                </DialogTitle>
                <DialogDescription>
                  {editingMission
                    ? "Update the mission details below"
                    : "Fill in the details to create a new mission"}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="bg-secondary border-border"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) =>
                      setFormData({ ...formData, status: value })
                    }
                  >
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="points">Points</Label>
                  <Input
                    id="points"
                    type="number"
                    value={formData.points}
                    onChange={(e) =>
                      setFormData({ ...formData, points: parseInt(e.target.value) || 0 })
                    }
                    className="bg-secondary border-border"
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    {editingMission ? "Update" : "Create"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-foreground font-bold">Title</TableHead>
                <TableHead className="text-foreground font-bold">Description</TableHead>
                <TableHead className="text-foreground font-bold">Status</TableHead>
                <TableHead className="text-foreground font-bold">Points</TableHead>
                <TableHead className="text-foreground font-bold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {missions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                    No missions yet. Create your first mission!
                  </TableCell>
                </TableRow>
              ) : (
                missions.map((mission) => (
                  <TableRow key={mission.id} className="border-border hover:bg-muted/50">
                    <TableCell className="font-medium">{mission.title}</TableCell>
                    <TableCell className="max-w-md truncate">
                      {mission.description || "-"}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                          mission.status
                        )}`}
                      >
                        {mission.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-primary font-bold">{mission.points}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(mission)}
                          className="hover:bg-primary/20 hover:text-primary"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(mission.id)}
                          className="hover:bg-destructive/20 hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Missions;
