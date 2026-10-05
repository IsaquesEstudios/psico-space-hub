CREATE TABLE public.guia_pais_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  whatsapp text NOT NULL,
  origem text NOT NULL DEFAULT 'lp-guia-pais',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.guia_pais_leads TO anon;
GRANT ALL ON public.guia_pais_leads TO service_role;

ALTER TABLE public.guia_pais_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitantes podem cadastrar para receber o guia"
  ON public.guia_pais_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);