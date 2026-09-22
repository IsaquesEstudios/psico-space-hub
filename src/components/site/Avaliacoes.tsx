import { Star } from "lucide-react";

import { Eyebrow, Section } from "@/components/site/bits";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { avaliacoes, googleAvaliacoesUrl } from "@/data/site";

export function Avaliacoes({ className = "bg-muted" }: { className?: string }) {
  return (
    <Section className={className}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>Quem já passou por aqui</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            Avaliações de famílias e pacientes
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Depoimentos publicados por famílias e pacientes na ficha da clínica no Google.
          </p>
        </div>
        <a
          href={googleAvaliacoesUrl}
          target="_blank"
          rel="noreferrer"
          className="eyebrow inline-flex items-center gap-2 text-primary"
        >
          Ver todas no Google
        </a>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="mt-12">
        <CarouselContent className="-ml-6">
          {avaliacoes.map((avaliacao) => (
            <CarouselItem
              key={avaliacao.nome}
              className="basis-full pl-6 sm:basis-1/2 lg:basis-1/3"
            >
              <figure className="flex h-full flex-col border border-border bg-background p-7">
                <div className="flex gap-1" aria-label={`${avaliacao.nota} de 5 estrelas`}>
                  {Array.from({ length: avaliacao.nota }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-primary text-primary"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{avaliacao.texto}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-display text-lg leading-snug">{avaliacao.nome}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{avaliacao.quando}</p>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex gap-3">
          <CarouselPrevious className="static translate-y-0 rounded-none border-border" />
          <CarouselNext className="static translate-y-0 rounded-none border-border" />
        </div>
      </Carousel>
    </Section>
  );
}
