<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MessageRepository::class)]
class Message
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $libelle = null;

    /**
     * @var Collection<int, HttpCode>
     */
    #[ORM\OneToMany(targetEntity: HttpCode::class, mappedBy: 'message')]
    private Collection $httpCodes;

    public function __construct()
    {
        $this->httpCodes = new ArrayCollection();
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

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): static
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * @return Collection<int, HttpCode>
     */
    public function getHttpCodes(): Collection
    {
        return $this->httpCodes;
    }

    public function addHttpCode(HttpCode $httpCode): static
    {
        if (!$this->httpCodes->contains($httpCode)) {
            $this->httpCodes->add($httpCode);
            $httpCode->setMessage($this);
        }

        return $this;
    }

    public function removeHttpCode(HttpCode $httpCode): static
    {
        if ($this->httpCodes->removeElement($httpCode)) {
            // set the owning side to null (unless already changed)
            if ($httpCode->getMessage() === $this) {
                $httpCode->setMessage(null);
            }
        }

        return $this;
    }
}
