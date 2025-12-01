-- Create missions table for CRUD operations
CREATE TABLE public.missions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'pending')),
  points integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.missions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read missions (public display)
CREATE POLICY "Anyone can view missions"
ON public.missions
FOR SELECT
USING (true);

-- Create policy to allow anyone to insert missions (for demo purposes)
CREATE POLICY "Anyone can create missions"
ON public.missions
FOR INSERT
WITH CHECK (true);

-- Create policy to allow anyone to update missions
CREATE POLICY "Anyone can update missions"
ON public.missions
FOR UPDATE
USING (true);

-- Create policy to allow anyone to delete missions
CREATE POLICY "Anyone can delete missions"
ON public.missions
FOR DELETE
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_missions_updated_at
BEFORE UPDATE ON public.missions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();