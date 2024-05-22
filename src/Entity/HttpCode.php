<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\HttpCodeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    paginationEnabled: false,
    normalizationContext: ['groups' => 'read:item']
)]
#[ApiFilter(SearchFilter::class, properties: ['code' => 'exact'])]
#[ORM\Entity(repositoryClass: HttpCodeRepository::class)]
class HttpCode
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('read:item')]
    private ?int $id = null;

    #[ORM\Column(type: Types::SMALLINT, unique: true)]
    #[Groups('read:item')]
    private ?int $code = null;

    /**
     * @var Collection<int, Apology>
     */
    #[ORM\OneToMany(targetEntity: Apology::class, mappedBy: 'http_code')]
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
            $apology->setHttpCode($this);
        }

        return $this;
    }

    public function removeApology(Apology $apology): static
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
