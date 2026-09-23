CREATE TABLE public.admin_login_attempts (id BIGSERIAL PRIMARY KEY, ip_hash TEXT NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT now());
GRANT ALL ON public.admin_login_attempts TO service_role;
GRANT USAGE, SELECT ON SEQUENCE public.admin_login_attempts_id_seq TO service_role;
ALTER TABLE public.admin_login_attempts ENABLE ROW LEVEL SECURITY;
CREATE INDEX admin_login_attempts_ip_idx ON public.admin_login_attempts (ip_hash, created_at DESC);