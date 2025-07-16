import React from "react";
import { Star, TrendingUp, Users, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SuccessStories = () => {
  const stories = [
    {
      name: "Codequest 25",
      founder: "IEDC & CODIAC",
      industry: "Tech",
      description:
        "10 hr Hackathon counducted in association between CODIAC & IEDC.People from various fields partcipated",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80",
      stats: {
        funding: "₹10Ck",
        users: "30+",
        growth: "100%",
      },
    },
    {
      name: "Women Entrauprenurial session",
      founder: "IEDC",
      industry: "IT",
      description:
        "A talk session by a women entrauprenuer speaking about the challenges faced it the field.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
      stats: {
        users: "20+",
      },
    },
    {
      name: "Inuaguration",
      founder: "IEDC",
      industry: "Tech",
      description:
        "Inuaguration of the new executive IEDC committee",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
      stats: {
        funding: "₹1K",
        users: "30+",
        growth: "400%",
      },
    },
  ];

  const achievements = [
    {
      icon: TrendingUp,
      number: "2+",
      label: "Startups Launched",
      color: "text-blue-600",
    },
    {
      icon: DollarSign,
      number: "₹50K+",
      label: "Total Funding Raised",
      color: "text-green-600",
    },
    {
      icon: Users,
      number: "10k+",
      label: "Lives Impacted",
      color: "text-purple-600",
    },
    {
      icon: Star,
      number: "95%",
      label: "Success Rate",
      color: "text-orange-600",
    },
  ];

  return (
    <section id="success" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the inspiring entrepreneurs who started their journey with IEDC
            and are now making a significant impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{story.name}</h3>
                  <p className="text-blue-200">{story.industry}</p>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Founded by</p>
                  <h4 className="font-semibold text-gray-900">
                    {story.founder}
                  </h4>
                </div>
                <p className="text-gray-600">{story.description}</p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-blue-600">
                        {story.stats.funding}
                      </p>
                      <p className="text-xs text-gray-600">Funding</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-purple-600">
                        {story.stats.users}
                      </p>
                      <p className="text-xs text-gray-600">Participants</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-orange-600">
                        {story.stats.growth}
                      </p>
                      <p className="text-xs text-gray-600">Growth</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
              </div>
              <h3 className={`text-3xl font-bold mb-2 ${achievement.color}`}>
                {achievement.number}
              </h3>
              <p className="text-gray-600">{achievement.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful entrepreneurs who started their
              journey with IEDC. Your idea could be the next big success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                Apply to Incubator
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
