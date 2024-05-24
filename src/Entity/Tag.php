<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use App\Repository\TagRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    paginationEnabled: false,
    normalizationContext: ['groups' => 'read:item'],
    operations: [
        new GetCollection(),
        new Post()
    ]
)]
#[ApiFilter(SearchFilter::class, properties: ['libelle' => 'exact'])]
#[ORM\Entity(repositoryClass: TagRepository::class)]
class Tag
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('read:item')]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups('read:item')]
    private ?string $libelle = null;

    /**
     * @var Collection<int, Apology>
     */
    #[ORM\OneToMany(targetEntity: Apology::class, mappedBy: 'tag')]
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
     * @return Collection<int, Apology>
     */
    public function getApologies(): Collection
    {
        return $this->apologies;
    }

    public function addApology(Apology $apology): static
    {
        if (!$this->apologies->contains($apology)) {
            $this->apologies->add($apology);
            $apology->setTag($this);
        }

        return $this;
    }

    public function removeApology(Apology $apology): static
    {
        if ($this->apologies->removeElement($apology)) {
            // set the owning side to null (unless already changed)
            if ($apology->getTag() === $this) {
                $apology->setTag(null);
            }
        }

        return $this;
    }
}
