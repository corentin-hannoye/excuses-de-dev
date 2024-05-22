<?php

namespace App\Entity;

use App\Repository\HttpCodeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: HttpCodeRepository::class)]
class HttpCode
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('read:item')]
    private ?int $id = null;

    #[ORM\Column(type: Types::SMALLINT)]
    #[Groups('read:item')]
    private ?int $code = null;

    /**
     * @var Collection<int, Apologie>
     */
    #[ORM\OneToMany(targetEntity: Apologie::class, mappedBy: 'http_code')]
    private Collection $apologies;

    public function __construct()
    {
        $this->apologies = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getCode(): ?int
    {
        return $this->code;
    }

    public function setCode(int $code): static
    {
        $this->code = $code;

        return $this;
    }

    /**
     * @return Collection<int, Apologie>
     */
    public function getApologies(): Collection
    {
        return $this->apologies;
    }

    public function addApology(Apologie $apology): static
    {
        if (!$this->apologies->contains($apology)) {
            $this->apologies->add($apology);
            $apology->setHttpCode($this);
        }

        return $this;
    }

    public function removeApology(Apologie $apology): static
    {
        if ($this->apologies->removeElement($apology)) {
            // set the owning side to null (unless already changed)
            if ($apology->getHttpCode() === $this) {
                $apology->setHttpCode(null);
            }
        }

        return $this;
    }
}
